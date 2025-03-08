import React from 'react';
import { Platform } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__
    ? TestIds.ADAPTIVE_BANNER
    : Platform.OS === 'android'
        ? 'ca-app-pub-5330416188910245/2813919499' // Your real Android ad unit
        : ''; // Empty string for iOS to avoid crashes

const Ads = () => {
    if (Platform.OS === 'ios') return null; // Don't render the ad component on iOS

    return (
        <BannerAd
            unitId={adUnitId}
            size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
            requestOptions={{
                networkExtras: {
                    collapsible: 'bottom',
                },
            }}
        />
    );
};

export default Ads;
