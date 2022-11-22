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

        <TouchableOpacity style={styles.button}>
          <TextComponent align="center" style={{ fontWeight: 'bold' }}>
            Redeem
          </TextComponent>
        </TouchableOpacity>

        <TextComponent align="center" variant="muted" style={{ marginTop: 4 }}>
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
          style={[
            styles.button,
            { backgroundColor: COLORS.button.primary.backgroundColor },
          ]}>
          <TextComponent align="center" style={{ fontWeight: 'bold' }}>
            Request payout
          </TextComponent>
        </TouchableOpacity>

        <TextComponent align="center" style={{ marginTop: 4, color: 'white' }}>
          This is an income generated from incoming calls. Payout is processed
          when fund is exceeding USD 100.
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
  button: {
    borderRadius: 16,
    padding: 8,
    elevation: 1,
    backgroundColor: COLORS.button.primary.backgroundColor,
    marginVertical: 16,
  },
});
