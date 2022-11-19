import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Avatar from '~/app/components/common/Avatar';
import Badge from '~/app/components/common/Badge';
import TextComponent from '~/app/components/common/Text';
import { COLORS } from '~/app/styles/theme';

const ContactCard = () => {
  return (
    <View style={styles.contactCard}>
      <TouchableOpacity style={styles.wrapper}>
        <Avatar onlineStatus="offline" initial="N" />

        <View>
          <View style={styles.userName}>
            <TextComponent fontSize="l" style={{ fontWeight: 'bold' }}>
              Nas{' '}
            </TextComponent>
            <MaterialIcons name="verified" size={20} color="blue" />
          </View>

          <TextComponent
            fontSize="m"
            variant="muted"
            style={{ marginBottom: 4 }}>
            Software Engineer
          </TextComponent>
          <Badge>KES 500/Min</Badge>
        </View>

        <View style={styles.arrow}>
          <MaterialIcons size={28} name="chevron-right" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ContactCard;

const styles = StyleSheet.create({
  contactCard: {
    padding: 8,
    marginVertical: 8,
    borderRadius: 4,
    borderBottomColor: COLORS.container.borderColor,
    borderBottomWidth: 1,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  userName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow: {
    position: 'absolute',
    right: 0,
    top: 12,
  },
});
