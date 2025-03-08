import React from 'react'
import { StyleSheet } from 'react-native'
import KoreanQuizGame from '@/components/KoreanQuizGame';
import { useGlobalSearchParams } from 'expo-router';

const koreaQuiz = () => {
    const item = useGlobalSearchParams()
  return (
    <KoreanQuizGame id={item.id as string}/>
  )
}

export default koreaQuiz

const styles = StyleSheet.create({})