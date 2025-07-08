const date = new Date();
const bgColor = '#f8fafc';
const primaryColor = '#1e293b';
const accentColor = '#3b82f6';
const gradientStart = '#3b82f6';
const gradientEnd = '#8b5cf6';
const heading = 'Envol Culture';

const contactEmailBody = (body: string): string => `
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Email subject line</title>
<style>
  body {
    background-color: ${bgColor};
    margin: 0; 
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; 
    color: ${primaryColor}; 
    font-size: 14px; 
    font-weight: 400; 
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  p {
    margin: 0; 
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; 
    color: ${primaryColor}; 
    font-size: 14px; 
    font-weight: 400; 
    line-height: 1.6;
  }
  .gradient-bg {
    background: linear-gradient(135deg, ${gradientStart} 0%, ${gradientEnd} 100%);
  }
  .shadow {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05), 0 4px 6px rgba(0, 0, 0, 0.07);
  }
  .brand-title {
    font-size: 28px;
    font-weight: 700;
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    letter-spacing: -0.5px;
  }
  .content-wrapper {
    background: white;
    border-radius: 12px;
    overflow: hidden;
  }
  .divider {
    height: 3px;
    background: linear-gradient(90deg, ${gradientStart} 0%, ${gradientEnd} 100%);
    margin: 0;
  }
  .footer-link {
    color: ${accentColor};
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
  }
  .footer-link:hover {
    color: ${primaryColor};
  }
  .body-content {
    font-size: 15px;
    line-height: 1.7;
    color: #374151;
  }
  .body-content p {
    margin-bottom: 16px;
    font-size: 15px;
    line-height: 1.7;
    color: #374151;
  }
  .body-content h1,
  .body-content h2,
  .body-content h3 {
    color: ${primaryColor};
    margin-top: 24px;
    margin-bottom: 12px;
    font-weight: 600;
  }
  .body-content h1 {
    font-size: 24px;
    line-height: 1.3;
  }
  .body-content h2 {
    font-size: 20px;
    line-height: 1.4;
  }
  .body-content h3 {
    font-size: 18px;
    line-height: 1.5;
  }
  .body-content a {
    color: ${accentColor};
    text-decoration: none;
    font-weight: 500;
  }
  .body-content a:hover {
    text-decoration: underline;
  }
  .body-content ul,
  .body-content ol {
    margin: 16px 0;
    padding-left: 20px;
  }
  .body-content li {
    margin-bottom: 8px;
    color: #374151;
  }
  .body-content blockquote {
    margin: 20px 0;
    padding: 16px 20px;
    border-left: 4px solid ${accentColor};
    background: #f8fafc;
    border-radius: 0 8px 8px 0;
    font-style: italic;
  }
  .body-content code {
    background: #f1f5f9;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
    font-size: 13px;
    color: #e11d48;
  }
</style>
</head>

<body style="margin: 0; background-color: ${bgColor}; padding: 20px 0;">
  <div style="max-width: 600px; margin: 0 auto; background: transparent;">
    <!-- Main container with shadow -->
    <div class="content-wrapper shadow" style="background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05), 0 4px 6px rgba(0, 0, 0, 0.07);">
      
      <!-- Header with gradient -->
      <div class="gradient-bg" style="background: linear-gradient(135deg, ${gradientStart} 0%, ${gradientEnd} 100%); padding: 40px 0; text-align: center;">
        <div class="brand-title" style="font-size: 28px; font-weight: 700; color: white; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); letter-spacing: -0.5px; margin: 0;">
          ${heading}
        </div>
      </div>
      
      <!-- Gradient divider -->
      <div class="divider" style="height: 3px; background: linear-gradient(90deg, ${gradientStart} 0%, ${gradientEnd} 100%); margin: 0;"></div>
      
      <!-- Content padding -->
      <div style="padding: 40px 0 0 0;">
        
        <!-- Body content -->
        <div style="padding: 0 40px;">
          <div class="body-content" style="font-size: 15px; line-height: 1.7; color: #374151;">
            ${body}
          </div>
        </div>
        
        <!-- Bottom padding -->
        <div style="padding: 40px 0 0 0;"></div>
        
        <!-- Footer -->
        <div style="background: #f8fafc; padding: 30px 40px; border-top: 1px solid #e2e8f0; text-align: center;">
          <p style="margin: 0; font-size: 13px; color: #64748b; line-height: 1.5;">
            <a href="mailto:${process.env.MAIL_INFO}" class="footer-link" style="color: ${accentColor}; text-decoration: none; font-weight: 500;">${process.env.MAIL_INFO}</a>
          </p>
          <p style="margin: 8px 0 0 0; font-size: 12px; color: #94a3b8; line-height: 1.4;">
            ${heading} © ${date.getFullYear()} All Rights Reserved
          </p>
        </div>
        
      </div>
    </div>
    
    <!-- Spacer -->
    <div style="height: 20px;"></div>
  </div>
</body>
</html>`;

export default contactEmailBody;