import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BaseWidget from './BaseWidget';
import {theme} from '../../styles/theme';
import {isTablet} from '../../utils/responsive';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const StatisticWidget = ({
  title,
  value,
  subtitle,
  icon,
  iconColor,
  trend,
  trendValue,
  onPress,
}) => {
  const isTab = isTablet();
  const isPositiveTrend = trend === 'up';
  const trendColor = isPositiveTrend
    ? theme.colors.semantic.success
    : theme.colors.semantic.error;

  return (
    <BaseWidget
      title={title}
      icon={icon}
      iconColor={iconColor}
      onPress={onPress}
      showArrow={!!onPress}>
      <View style={styles.statisticContainer}>
        {/* Main Value */}
        <Text style={[styles.value, isTab && styles.tabletValue]}>{value}</Text>

        {/* Subtitle */}
        {subtitle && (
          <Text style={[styles.subtitle, isTab && styles.tabletSubtitle]}>
            {subtitle}
          </Text>
        )}

        {/* Trend Indicator */}
        {trend && trendValue && (
          <View style={styles.trendContainer}>
            <Icon
              name={trend === 'up' ? 'trending-up' : 'trending-down'}
              size={isTab ? wp('4.5%') : wp('4%')}
              color={trendColor}
              style={styles.trendIcon}
            />
            <Text style={[styles.trendValue, {color: trendColor}]}>
              {trendValue}
            </Text>
          </View>
        )}
      </View>
    </BaseWidget>
  );
};

const styles = StyleSheet.create({
  statisticContainer: {
    alignItems: 'center',
  },
  value: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    color: theme.colors.neutral.gray800,
    marginBottom: hp('1%'),
  },
  tabletValue: {
    fontSize: wp('7%'),
  },
  subtitle: {
    fontSize: wp('3.5%'),
    color: theme.colors.neutral.gray600,
    textAlign: 'center',
    marginBottom: hp('1.5%'),
  },
  tabletSubtitle: {
    fontSize: wp('4%'),
  },
  trendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trendIcon: {
    marginRight: wp('1%'),
  },
  trendValue: {
    fontSize: wp('3%'),
    fontWeight: 'bold',
  },
});

export default StatisticWidget;
