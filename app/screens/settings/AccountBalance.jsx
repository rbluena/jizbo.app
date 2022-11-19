import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import TextComponent from '~/app/components/common/Text';
import { SCREEN } from '~/app/constants';
import { COLORS } from '~/app/styles/theme';

const AccountBalance = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextComponent align="center" fontSize="xl" style={{ color: COLORS.T }}>
          Balances
        </TextComponent>
      </View>

      {/* Top */}
      <View style={styles.contentContainer}>
        <TextComponent
          align="center"
          variant="muted"
          style={{ fontWeight: 'bold' }}>
          Top-up Balance
        </TextComponent>

        <View style={{ marginVertical: 16 }} />
        <TextComponent
          fontSize="xl"
          align="center"
          style={{ fontWeight: 'bold' }}>
          KES 5K
        </TextComponent>

        <TouchableOpacity>
          <TextComponent>Redeem</TextComponent>
        </TouchableOpacity>

        <TextComponent
          align="center"
          variant="muted"
          fontSize="s"
          style={{ marginTop: 4 }}>
          This balance is used only for outgoing calls. It is non-refundable.
        </TextComponent>
      </View>

      {/* start:  */}
      <View style={[styles.contentContainer, { backgroundColor: 'black' }]}>
        <TextComponent
          align="center"
          variant="muted"
          style={{ fontWeight: 'bold' }}>
          Revenue
        </TextComponent>

        <View style={{ marginVertical: 16 }} />
        <TextComponent
          fontSize="xl"
          align="center"
          style={{ fontWeight: 'bold', color: 'white' }}>
          KES 10K
        </TextComponent>

        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            borderRadius: 16,
            padding: 8,
            elevation: 2,
          }}>
          <TextComponent align="center" fontSize="l">
            Request payout
          </TextComponent>
        </TouchableOpacity>

        <TextComponent
          align="center"
          fontSize="s"
          style={{ marginTop: 4, color: 'white' }}>
          This is an income generated from incoming calls. Payout is processed
          when fund is exceeding USD 100 and is done in every end of the month
          or when you choose to delete your account.
        </TextComponent>
      </View>
      {/* end: */}
    </View>
  );
};

export default AccountBalance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.container.background,
    paddingHorizontal: SCREEN.width * 0.05,
  },

  header: {
    paddingVertical: 32,
  },
  contentContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginVertical: 16,
    borderColor: COLORS.container.borderColor,
    elevation: 4,
  },
});
