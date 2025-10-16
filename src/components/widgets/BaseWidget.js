import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {theme} from '../../styles/theme';
import {isTablet} from '../../utils/responsive';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const BaseWidget = ({
  title,
  icon,
  iconColor,
  children,
  onPress,
  style,
  headerStyle,
  showArrow = false,
}) => {
  const isTab = isTablet();
  const content = (
    <View style={[styles.container, isTab && styles.tabletContainer, style]}>
      {/* Widget Header */}
      <View style={[styles.header, headerStyle]}>
        <View style={styles.headerLeft}>
          {icon && (
            <Icon
              name={icon}
              size={isTab ? wp('6%') : wp('5%')}
              color={iconColor || theme.colors.primary.main}
              style={styles.headerIcon}
            />
          )}
          <Text style={[styles.title, isTab && styles.tabletTitle]}>
            {title}
          </Text>
        </View>
        {showArrow && (
          <Icon
            name="chevron-right"
            size={isTab ? wp('6%') : wp('5%')}
            color={theme.colors.neutral.gray500}
          />
        )}
      </View>

      {/* Widget Content */}
      <View style={styles.content}>{children}</View>
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
        accessible={true}
        accessibilityRole="button"
        accessibilityLabel={`${title} widget`}>
        {content}
      </TouchableOpacity>
    );
  }

  return content;
};

const styles = StyleSheet.create({
  container: {
    ...theme.card,
    marginBottom: hp('2%'),
    padding: wp('3%'),
  },
  tabletContainer: {
    padding: wp('4%'),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp('1.5%'),
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  headerIcon: {
    marginRight: wp('2%'),
  },
  title: {
    fontSize: wp('4.5%'),
    fontWeight: 'bold',
    color: theme.colors.neutral.gray800,
    flex: 1,
  },
  tabletTitle: {
    fontSize: wp('5.5%'),
  },
  content: {
    flex: 1,
  },
});

export default BaseWidget;
