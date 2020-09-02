declare namespace pins {
    //% fixedInstance shim=pxt::getPin(PIN_LED)
    const LED: PwmOnlyPin;
    //% fixedInstance shim=pxt::getPin(PIN_D5)
    const ENABLE: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D8)
    const ENABLE_V1: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_A0)
    const MA1: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_A1)
    const MA2: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_A3)
    const MB1: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_A2)
    const MB2: PwmPin;
    
    //% fixedInstance shim=pxt::getPin(PIN_D4)
    const SOUND: DigitalInOutPin;
 
    //% fixedInstance shim=pxt::getPin(PIN_NEOPIXEL)
    const NEOPIXEL: DigitalInOutPin;
}

