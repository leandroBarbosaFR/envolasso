const date = new Date();
const bgColor = '#fff';
const primaryColor = '#000';
// const emailImgSrc = 'https://ibb.co/1sCL8qq';
const heading = '1367 Studio';

const contactEmailBody = (body: string): string => `
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Email subject line</title>
<style>
  body {
    background-color: ${bgColor};
    margin: 0; font-family: Helvetica, sans-serif; color:#000000; font-size: 12px; font-weight: normal; line-height: 17px;
  }
  p {
    margin: 0; font-family: Helvetica, sans-serif; color:#000000; font-size: 12px; font-weight: normal; line-height: 17px;
  }
</style>
</head>

<body style="margin: 0; background-color: #f9fafb;">
  <table width="600" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#FFFFFF">
    <tbody>
      <!-- header -->
      <table height="65" width="600" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#FFFFFF">
        <tr>
          <td height="65" width="100" border="0" cellspacing="0" cellpadding="0" align="center" valign="middle" bgcolor="#FFFFFF">
              ${heading}
          </td>
        </tr>
      </table>
      <!-- padding -->
      <table width="600" height="40" border="0" cellspacing="0" cellpadding="0" align="center"  bgcolor="#FFFFFF">
        <tr>
          <td height="40" width="600" border="0" cellspacing="0" cellpadding="0" align="center" valign="middle" bgcolor="#FFFFFF"></td>
        </tr>
      </table>
      <!-- body -->
      <table height="" width="600" border="0" cellspacing="0" cellpadding="0" align="center"  bgcolor="#FFFFFF">
        <tr>
          <td height="" width="50" border="0" cellspacing="0" cellpadding="0" align="center" valign="middle" bgcolor="#FFFFFF"></td>
          <td height="" width="500" border="0" cellspacing="0" cellpadding="0" align="left" valign="top" bgcolor="#FFFFFF">
            <div style="margin: 0; font-family: Helvetica, sans-serif; color:#000000; font-size: 12px; font-weight: normal; line-height: 17px;">
              ${body}
            </div>
          </td>
          <td height="" width="50" border="0" cellspacing="0" cellpadding="0" align="center" valign="middle" bgcolor="#FFFFFF"></td>
        </tr>
      </table>
      <!-- padding -->
      <table width="600" height="40" border="0" cellspacing="0" cellpadding="0" align="center"  bgcolor="#FFFFFF">
        <tr>
          <td height="40" width="600" border="0" cellspacing="0" cellpadding="0" align="center" valign="middle" bgcolor="#FFFFFF"></td>
        </tr>
      </table>
      <!-- footer message -->
      <table height="40" width="600" border="0" cellspacing="0" cellpadding="0" align="center"  bgcolor="#FFFFFF">
        <tr>
          <td height="40" width="50" border="0" cellspacing="0" cellpadding="0" align="center" valign="middle" bgcolor="#FFFFFF"></td>
          <td height="40" width="500" border="0" cellspacing="0" cellpadding="0" align="center" valign="middle" bgcolor="#FFFFFF">
            <p style="margin: 0; font-family: Helvetica, sans-serif; color:${primaryColor}; font-size: 12px; font-weight: normal; line-height: 17px;">
              <a  href="mailto:${
                process.env.MAIL_INFO
              }" style="margin: 0; font-family: Helvetica, sans-serif; color:${primaryColor}; font-size: 12px; font-weight: normal; line-height: 17px;" >${
                process.env.MAIL_INFO
              }</a> | 1367 Studio © ${date.getFullYear()} All Rights Reserved
            </p>
          </td>
          <td height="40" width="50" border="0" cellspacing="0" cellpadding="0" align="center" valign="middle" bgcolor="#FFFFFF"></td>
        </tr>
      </table>
    </tbody>
  </table>
</body>
</html>`;

export default contactEmailBody;
