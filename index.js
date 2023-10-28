module.exports = isMobile
import { headers } from 'next/headers';
import { UAParser } from 'ua-parser-js';
const isMobile = () => {
    const headersList = headers();
    const userAgent = headersList.get('user-agent');
    const uap = new UAParser(userAgent)
    const device = uap.getDevice()
    if (device.type == 'mobile')
        return true
    else
        return false
}