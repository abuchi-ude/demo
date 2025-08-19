# MHI Demo - Healthcare Dashboard

A modern healthcare management dashboard built with Next.js, React, and TypeScript. This application provides AI-powered prescription validation, patient management, and healthcare insights for medical professionals.

## 🏥 Features

### Core Functionality
- **AI-Powered Prescription Review** - Automated validation and safety checks for prescriptions
- **Patient Management** - Comprehensive patient data management and tracking
- **Healthcare Dashboard** - Overview of key metrics and patient information
- **Inventory Management** - Track and manage medical supplies and medications
- **AI Assistant** - Intelligent healthcare assistant for clinical decision support
- **Insights & Analytics** - Data-driven insights for healthcare operations
- **Settings Management** - Customizable application settings

### AI Capabilities
- Drug interaction detection
- Allergy profile checking
- Duplicate medication alerts
- Dosage warnings
- Risk scoring system (AI Risk Score: 81-94%)
- Real-time safety validations

## 🚀 Technology Stack

- **Frontend Framework**: Next.js 15.4.6
- **UI Library**: React 19.1.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Build Tool**: Next.js with ESLint
- **Deployment**: Ready for production deployment

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn package manager
- Git

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abuchi-ude/demo.git
   cd demo
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
mhi-demo/
├── components/
│   └── Sidebar.tsx          # Navigation sidebar component
├── public/
│   └── icons/              # SVG icons and assets
│       ├── ai-robot.svg
│       ├── notification.svg
│       ├── main-pic.svg
│       └── ... (various medical icons)
├── src/
│   └── app/
│       ├── ai_assistant/    # AI assistant page
│       ├── dashboard/       # Main dashboard
│       ├── insights/        # Analytics and insights
│       ├── inventory/       # Inventory management
│       ├── patients/        # Patient management
│       ├── settings/        # Application settings
│       ├── layout.tsx       # Root layout
│       ├── page.tsx         # Prescription review page
│       └── globals.css      # Global styles
├── package.json
└── README.md
```

## 🎯 Key Components

### Prescription Review
- Upload and sync prescriptions from EHR systems
- AI-powered validation with real-time alerts
- Patient data integration with medical history
- Risk assessment and safety recommendations

### Patient Data Management
- Comprehensive patient profiles
- Medical history tracking
- Allergy and medication management
- Contact information and demographics

### AI Safety Features
- **High Risk Alerts**: Drug interactions and allergies
- **Moderate Risk Warnings**: Duplicate medications
- **Low Risk Notices**: Dosage recommendations
- **Safety Confirmations**: No issues detected

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 🎨 Design Features

- **Responsive Design**: Mobile-first approach with responsive layouts
- **Modern UI**: Clean, professional healthcare interface
- **Color-coded Alerts**: Visual risk indicators (Red: High, Orange: Moderate, Yellow: Low, Green: Safe)
- **Accessibility**: Built with healthcare accessibility standards in mind

## 🔐 Security Considerations

This application handles sensitive healthcare data. Ensure you:
- Implement proper authentication and authorization
- Use HTTPS in production
- Comply with HIPAA and other healthcare regulations
- Secure patient data transmission and storage

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Abuchi Ude** - *Initial work* - [@abuchi-ude](https://github.com/abuchi-ude)

## 🙋‍♂️ Support

If you have any questions or need help with setup, please open an issue in the GitHub repository.

## 🔄 Version History

- **v0.1.0** - Initial release with core healthcare dashboard features

## 🌟 Acknowledgments

- Built with modern React and Next.js best practices
- Designed for healthcare professionals and medical institutions
- AI-powered features for enhanced patient safety

---

**⚠️ Important**: This is a demo application. For production use in healthcare environments, ensure compliance with all relevant medical regulations and data protection laws.
