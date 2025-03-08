import { View, Text, FlatList } from 'react-native';
import React from 'react';

const faqData = [
  {
    question: 'Is this application safe? / Apakah aplikasi ini aman?',
    answer: 'Very safe. / Sangat aman.',
  },
  {
    question: 'Does this application need internet? / Apakah aplikasi ini butuh internet?',
    answer: 'No. / Tidak.',
  },
  {
    question: 'Does this application collect my data? / Apakah aplikasi ini mengambil dataku?',
    answer: 'No. / Tidak.',
  },
  {
    question: 'Is this application easy to use? / Apakah aplikasi ini mudah digunakan?',
    answer: 'Yes. / Ya.',
  },
  {
    question: 'Does this application help me learn English/Indonesian? / Apakah aplikasi ini membantu dalam belajar bahasa Inggris/Bahasa Indonesia?',
    answer: 'Yes, very helpful. / Ya, sangat membantu.',
  },
];

const Faq = () => {
  return (
    <View style={{ margin: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 12 }}>
        Frequently Asked Questions
      </Text>
      <FlatList
        data={faqData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 12 }}>
            <Text style={{ fontSize: 16, fontWeight: '600' }}>• {item.question}</Text>
            <Text style={{ fontSize: 16, marginLeft: 12, color: '#555' }}>→ {item.answer}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Faq;
