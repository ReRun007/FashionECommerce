// typography.js
import { StyleSheet } from 'react-native';
import { COLORS } from './colors';

export const TEXT = StyleSheet.create({
  // หัวข้อใหญ่ (Headlines)
  h1: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    color: COLORS.textPrimary,     // สำหรับหัวข้อหลัก
  },
  h2: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 'bold',
    color: COLORS.textPrimary,     // สำหรับหัวข้อรอง
  },
  h3: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: 'bold',
    color: COLORS.textPrimary,     // สำหรับหัวข้อย่อย
  },

  // เนื้อหา (Body Text)
  bodyLarge: {
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.textPrimary,     // เนื้อหาขนาดใหญ่
  },
  bodyMedium: {
    fontSize: 14,
    lineHeight: 22,
    color: COLORS.textPrimary,     // เนื้อหาขนาดกลาง (default)
  },
  bodySmall: {
    fontSize: 12,
    lineHeight: 18,
    color: COLORS.textPrimary,     // เนื้อหาขนาดเล็ก
  },

  // ข้อความเน้น (Emphasis)
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
    color: COLORS.textPrimary,     // สำหรับ subtitle หรือข้อความเน้น
  },
  label: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    color: COLORS.textSecondary,   // สำหรับ label ต่างๆ
  },

  // ข้อความพิเศษ (Special Text)
  caption: {
    fontSize: 12,
    lineHeight: 16,
    color: COLORS.textLight,       // สำหรับคำอธิบายเพิ่มเติม
  },
  link: {
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.textLink,        // สำหรับข้อความที่คลิกได้
    textDecorationLine: 'underline',
  },

  // ข้อความในปุ่ม (Button Text)
  buttonLarge: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
    color: COLORS.textInverse,     // สำหรับปุ่มขนาดใหญ่
  },
  buttonMedium: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    color: COLORS.textInverse,     // สำหรับปุ่มขนาดกลาง
  },
  buttonSmall: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '500',
    color: COLORS.textInverse,     // สำหรับปุ่มขนาดเล็ก
  },

  // ข้อความแจ้งเตือน (Alert Text)
  error: {
    fontSize: 12,
    lineHeight: 18,
    color: COLORS.error,           // สำหรับข้อความแจ้งเตือนผิดพลาด
  },
  success: {
    fontSize: 12,
    lineHeight: 18,
    color: COLORS.success,         // สำหรับข้อความแจ้งเตือนสำเร็จ
  },
  info: {
    fontSize: 12,
    lineHeight: 18,
    color: COLORS.info,            // สำหรับข้อความให้ข้อมูล
  },

  // สำหรับข้อความใน Input
  input: {
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.textPrimary,     // สำหรับข้อความใน input
  },
  placeholder: {
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.placeholder,     // สำหรับ placeholder
  },
});