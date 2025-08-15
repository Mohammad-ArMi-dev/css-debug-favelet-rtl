# CSS Debug Favelet (RTL Support)

A small tool for quick web page debugging using CSS and a Favelet (Bookmarklet).

## 📌 What is this project?

This tool includes a diagnostic CSS file (`debug.css`) that can be applied to any web page with a single click to highlight common design issues.

### 🌟 Key Features

- Visual element structure detection
- Table and cell highlighting
- Inline style identification
- Missing `alt` text detection
- Deprecated tag marking (`<font>` etc.)
- Empty link detection
- Full RTL/LTR direction detection

## 🚀 How to use

### Option 1: Use Pre-made Favelet

1. Go to the [CSS Debug Favelet](https://mohammad-armi-dev.github.io/css-debug-favelet-rtl).
2. Drag the provided link to your bookmarks bar.
3. Click the bookmark to instantly apply debugging styles on any webpage.

### Option 2: Create Your Own Favelet

1. Upload your [`debug.css`](./css/debug.css) or any CSS file to your hosting or a public service (like GitHub Pages).
2. Make sure you have a direct link, e.g.:

   ```text
   https://example.com/debug.css
   ```

3. Create Favelet:
   - Go to Meyerweb Favelet Creator.
   - Paste your CSS URL in the "URL of stylesheet" field.
   - Name your Favelet (e.g., CSS Debug).
4. Run:  
   Navigate to any webpage you want.
   Click the CSS Debug bookmark to instantly apply debugging styles.

## 🔧 Debug Markers

| Element            | Marker         | Color      |
| ------------------ | -------------- | ---------- |
| All Elements       | Dashed Outline | Red        |
| Tables             | Solid Border   | Dark Red   |
| Table Cells        | Dotted Border  | Purple     |
| Inline Styles      | Dotted Border  | Orange     |
| Images without Alt | Thick Border   | Bright Red |
| Deprecated Tags    | Background     | Yellow     |
| Empty Links        | Outline        | Blue       |
| RTL Content        | Background     | Light Blue |
| LTR Content        | Background     | Light Pink |

## 📂 Project Structure

```text
css-debug-favelet-rtl/
├── assets/               # Images and icons
│   ├── logo.png
│   └── favicon.png
├── css/                  # Stylesheets
│   ├── debug.css
│   ├── style.css
│   └── style.min.css
├── font/                 # Fonts
├── js/                   # JavaScript scripts
│   └── index.js
├── node_modules/         # npm dependencies
├── .gitignore            # Files ignored by Git
├── index.html            # Main HTML page
├── LICENSE               # Project license
├── package-lock.json     # Dependency lock file
├── package.json          # Project metadata and dependencies
└── README.md             # Project documentation
```

## 💻 Development

To add more debugging rules, simply edit `debug.css` and recreate your favelet.

## 📜 License

This project is released under the MIT License. You are free to use it, but please credit the source.
See [LICENSE](./LICENSE) for details.

## 👤 Contact

- **GitHub:** [Mohammad-ArMi-dev](https://github.com/Mohammad-ArMi-dev)
- **Email:** mohammadArMi.dev@gmail.com

---

## فارسی (Persian)

یک ابزار کوچک برای خطایابی سریع صفحات وب با استفاده از CSS و یک Favelet (Bookmarklet).

## 📌 این پروژه چیست؟

این ابزار شامل یک فایل CSS خطایابی (`debug.css`) است که می‌تواند با یک کلیک، روی هر صفحه وب اعمال شود و مشکلات رایج طراحی را مشخص کند.

### 🌟 امکانات ابزار

● تشخیص ساختار المان‌ها  
● نمایش جداول و سلول‌ها  
● شناسایی استایل‌های inline  
● شناسایی تصاویر بدون متن جایگزین (`alt`)  
● مشخص‌کردن تگ‌های منسوخ (`<font>` و غیره)  
● تشخیص لینک‌های خالی  
● پشتیبانی کامل از تشخیص جهت متن (RTL/LTR)  

## 🚀 نحوه استفاده

### گزینه ۱: استفاده از Favelet آماده

۱. به [ابزار دیباگ CSS](https://mohammad-armi-dev.github.io/css-debug-favelet-rtl) بروید.  
۲. لینک داده شده را به نوار نشانک ها اضافه کنید  
۳. روی نشانک کلیک کنید تا استایل‌های دیباگ فوراً اعمال شوند.

### گزینه ۲: ساخت Favelet شخصی

۱. فایل [`debug.css`](./css/debug.css) یا یک فایل دلخواه را روی هاست خود یا سرویس عمومی (مثل GitHub Pages) بارگزاری کنید.  
۲. یک لینک مستقیم به آن داشته باشید، مثل:

```text
https://example.com/debug.css
```

۳. ساخت Favelet  
   ● به وب‌سایت [Meyerweb Favelet Creator](https://meyerweb.com/eric/tools/favelets/) بروید.  
   ● آدرس CSS خود را در بخش **URL of stylesheet** وارد کنید.  
   ● یک نام برای favelet انتخاب کنید (مثلاً `CSS Debug`).  
   ● لینک ساخته‌شده را به نوار نشانک‌های مرورگر خود بکشید.

۴. اجرا  
   ● به هر سایتی که می‌خواهید بروید.  
   ● روی بوکمارک `CSS Debug` کلیک کنید تا استایل‌های خطایابی فوراً روی صفحه اعمال شوند.

## 🔧 نشانگرهای تشخیصی

| المان | نشانگر | رنگ |
| --- | ----- | ---- |
| تمام المان‌ها | حاشیه نقطه‌چین | قرمز |
| جداول | حاشیه یکدست | قرمز تیره |
| سلول‌های جدول | حاشیه نقطه‌دار | بنفش |
| استایل‌های inline | حاشیه نقطه‌دار | نارنجی |
| تصاویر بدون alt | حاشیه ضخیم | قرمز روشن |
| تگ‌های منسوخ | پس‌زمینه | زرد |
| لینک‌های خالی | حاشیه | آبی |
| محتوای RTL | پس‌زمینه | آبی روشن |
| محتوای LTR | پس‌زمینه | صورتی روشن |

## 📂 ساختار پروژه

```text
css-debug-favelet-rtl/
├── assets/               # تصاویر و آیکون‌ها
│   ├── logo.png
│   └── favicon.png
├── css/                  # فایل‌های استایل
│   ├── debug.css
│   ├── style.css
│   └── style.min.css
├── font/                 # فونت‌ها
├── js/                   # اسکریپت‌های جاوااسکریپت
│   └── index.js
├── node_modules/         # وابستگی‌های npm
├── .gitignore            # فایل‌های نادیده‌گرفته‌شده توسط Git
├── index.html            # صفحه اصلی
├── LICENSE               # مجوز پروژه
├── package-lock.json     # قفل نسخه پکیج‌ها
├── package.json          # اطلاعات و وابستگی‌های پروژه
└── README.md             # مستندات پروژه
```

## 💻 توسعه

اگر می‌خواهید قوانین خطایابی بیشتری اضافه کنید، کافی است `debug.css` را ویرایش کرده و favelet خود را دوباره بسازید.

## 📜 مجوز

این پروژه تحت لایسنس MIT منتشر شده است. استفاده آزاد است، ولی لطفاً نام منبع را ذکر کنید.
برای اطلاعات بیشتر [LICENSE](./LICENSE) را مطالعه کنید.

## 👤 ارتباط با ما

● **گیت‌هاب:** [Mohammad-ArMi-dev](https://github.com/Mohammad-ArMi-dev)  
● **ایمیل:** mohammadArMi.dev@gmail.com
