# Project: RiPPLE Website

## Overview
เว็บไซต์ที่พัฒนาต่อจากต้นแบบที่สร้างใน CodePen ปัจจุบัน deploy ผ่าน GitHub Pages

## Hosting & Domain Setup
- โดเมนซื้อจาก GoDaddy
- โค้ดเก็บใน GitHub repo, deploy ด้วย GitHub Pages
- GitHub Pages settings: Deploy from branch `main`, root folder
- Custom domain เชื่อมผ่าน DNS records ที่ GoDaddy:
  - Apex domain → A records ชี้ไปที่ IP ของ GitHub Pages (185.199.108/109/110/111.153)
  - www subdomain → CNAME ชี้ไปที่ `username.github.io`
- เปิดใช้ "Enforce HTTPS" ใน GitHub Pages settings แล้ว

## Project Structure
- ไฟล์เว็บหลักอยู่ในโฟลเดอร์ `dist/` (ผลลัพธ์จาก CodePen export)
- `index.html` คือไฟล์หน้าแรก
- โครงสร้าง assets:
dist/
├── index.html
├── Style.css
├── assets/
│   ├── images/   (โลโก้และรูปภาพทั่วไป — เก็บใน GitHub ได้)
│   └── videos/   (สำหรับไฟล์ placeholder เท่านั้น)
## Media Hosting Strategy
- **รูปภาพทั่วไป** (โลโก้, ไอคอน): เก็บใน `assets/images/` ใน GitHub repo โดยตรง
- **วิดีโอ** (โดยเฉพาะ full-screen background video สไตล์ theforestias): เก็บที่ **Cloudinary** ไม่ใช่ใน GitHub — เพราะไฟล์ใหญ่และ Cloudinary ช่วย compress/optimize/stream ได้ดีกว่า

## Current Task / In Progress
- เพิ่งใส่ไฟล์โลโก้ไว้ใน `assets/images/` แล้ว
- ต้องแก้โค้ดใน `index.html` และ `Style.css` เพื่อย้ายตำแหน่งโลโก้ใหม่
- เว็บไซต์ยังต้องพัฒนาเพิ่มอีกหลายส่วน (หน้าผลงาน, บริการ, ติดต่อ — ยังไม่ได้เริ่ม)

## Notes
- Terminal ที่ใช้เป็น PowerShell (ไม่ใช่ bash) — ต้องใช้ syntax แบบ `mkdir a, b` ไม่ใช่ `mkdir -p a b`
