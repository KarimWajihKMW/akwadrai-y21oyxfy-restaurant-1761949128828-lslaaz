# Super Build Request

# Build Web Application from Scratch

**Project**: restaurant-1761949128828

## What Ra Understood from User Requirements

فهمت! منصة حجز مقاعد السينما "لولو سينما" 🎯

**الميزات الأساسية:**
✅ عرض الأفلام الحالية والقادمة مع التريلر
✅ اختيار أوقات العرض والقاعات
✅ خريطة المقاعد التفاعلية للحجز
✅ أنواع التذاكر (عادي، VIP، أطفال)
✅ نظام دفع آمن وإصدار التذاكر الرقمية
✅ حساب العضوية ونقاط الولاء
✅ لوحة إدارة السينما

**الصفحات المقترحة:**
📄 الصفحة الرئيسية (عرض الأفلام)
📄 تفاصيل الفيلم وأوقات العرض
📄 اختيار المقاعد والحجز
📄 الدفع وتأكيد الحجز
📄 حسابي (تذاكري ونقاط الولاء)
📄 لوحة إدارة السينما

**التصميم:**
🎨 تصميم سينمائي أنيق بألوان داكنة (أسود، ذهبي، أحمر) مع إضاءة درامية وصور عالية الجودة للأفلام

هل هذا يناسب ما تريد؟ يمكنك تأكيد البدء أو طلب تعديلات.

## Technical Requirements

Create a restaurant application with the following requirements:

Features:
- admin-panel

Authentication:
- Implement user authentication with NextAuth.js
- Support social login (Google, GitHub)

Payments:
- Integrate Stripe for payment processing
- Implement secure checkout flow

Technical Stack:
- Next.js 14 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Follow best practices and include error handling


## Instructions for Copilot

Build a **complete, production-ready web application from scratch** based on the above requirements. **Take your time** - this is a comprehensive build that may take 30-60 minutes to complete properly.

Start from scratch and create:

1. **Full Next.js 14 application structure** with App Router
   - Proper file organization (app/, components/, lib/, etc.)
   - Page routes for all required features
   - Layout components with navigation

2. **package.json** with all required dependencies
   - Next.js 14, React 18, TypeScript
   - All necessary libraries for the features
   - Proper scripts: dev, build, start, lint

3. **TypeScript configuration** (tsconfig.json)
   - Strict mode enabled
   - Proper path aliases

4. **Tailwind CSS setup** with proper configuration
   - tailwind.config.ts
   - Global styles
   - Responsive design

5. **Component implementations** following best practices
   - Reusable components
   - Proper TypeScript types
   - Accessibility considerations

6. **API routes** as needed for the application
   - REST API endpoints
   - Proper error handling
   - Input validation

7. **Database schema** (Prisma schema if needed)
   - All required models
   - Proper relationships
   - Migrations ready

8. **Environment variable template** (.env.example)
   - All required variables documented
   - Clear instructions

9. **Dockerfile** for Railway deployment
   - Multi-stage build
   - Optimized for production
   - Proper port configuration

10. **Complete README.md** with:
    - Project overview and features
    - Prerequisites and dependencies
    - Installation and setup instructions
    - Development and build commands
    - Deployment guide
    - Environment variables documentation
    - Project structure explanation

**IMPORTANT**: 
- **Build everything from scratch** - no templates, start fresh
- Ensure package.json includes proper "start" script for production deployment
- Implement all features mentioned in the requirements above
- Use modern best practices and clean code
- Take 30-60 minutes to implement everything properly
- Test that the application can build and run successfully

After completing the full implementation, **auto-merge this PR** to the main branch so Railway can deploy.

---
Generated on: 2025-10-31T22:18:52.537Z
