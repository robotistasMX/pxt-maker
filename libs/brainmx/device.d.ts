declare namespace pins {
    //% fixedInstance shim=pxt::getPin(PIN_LED)
    const LED: PwmOnlyPin;
    //% fixedInstance shim=pxt::getPin(PIN_A0)
    const ENC: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_A1)
    const ENB: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_A2)
    const ENA: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_D6)
    const MA1: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_D8)
    const MA2: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_D10)
    const MB2: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_D11)
    const MB1: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_D12)
    const MC1: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_D13)
    const MC2: PwmPin;
    
    //% fixedInstance shim=pxt::getPin(PIN_D7)
    const SOUND: PwmPin;

    //% fixedInstance shim=pxt::getPin(PIN_D0)
    const DIN: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_D1)
    const BCLK: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_D9)
    const LRCLK: PwmPin;

    

    //% fixedInstance shim=pxt::getPin(PIN_NEOPIXEL)
    const NEOPIXEL: DigitalInOutPin;


}

