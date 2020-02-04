/** Declaration file generated by dts-gen */

export = lorapacket;

declare class lorapacket {
    constructor(data: any, { appSKey, nwkSKey, appKey, encoding }: any, options: any);

    deriveKeys(devNonce: any, encoding?: string): void;

    getAppEUI(encoding?: string): any;

    getAppKey(encoding?: string): any;

    getAppNonce(encoding?: string): any;

    getAppSKey(encoding?: string): any;

    getCFList(): any;

    getComputedMic(encoding?: string, useOriginal: boolean, key: any): any;

    getDecryptedFrmPayload(encoding?: string): any;

    getDevAddr(encoding?: string): any;

    getDevEUI(encoding?: string): any;

    getDevNonce(encoding?: string): any;

    getDirection(encoding?: string): any;

    getFCnt(encoding?: string): any;

    getFOpts(option: any, encoding?: string): any;

    getFPort(encoding?: string): any;

    getFlag(namespace: any, flag: any): any;

    getFrameAck(encoding?: string): any;

    getFrameAdr(encoding?: string): any;

    getFrameAdrAckReq(encoding?: string): any;

    getFrameFOptsLen(encoding?: string): any;

    getFrameFPending(encoding?: string): any;

    getFrmPayload(encoding?: string): any;

    getMHDR(encoding?: string): any;

    getMType(encoding?: string): any;

    getMajor(): any;

    getMic(encoding?: string): any;

    getNetId(encoding?: string): any;

    getNwkSKey(encoding?: string): any;

    getRx1DRoffset(encoding?: string): any;

    getRx2DataRate(encoding?: string): any;

    getRxDelay(encoding?: string): any;

    hasFramePayload(): any;

    isDataPacket(): any;

    isJoin(): any;

    pack(encoding?: string, useOriginal: any): any;

    reset(): void;

    setAppEUI(appEUI: any, encoding?: string): any;

    setAppKey(appKey: any, encoding?: string): any;

    setAppNonce(appNonce: any, encoding?: string): any;

    setAppSKey(appSKey: any, encoding?: string): any;

    setCFList(cfList: any): any;

    setDecryptedFrmPayload(fPort: any, decryptedFrmPayload: any, encoding?: string): any;

    setDevAddr(devAddr: any, encoding?: string): any;

    setDevEUI(devEUI: any, encoding?: string): any;

    setDevNonce(devNonce: any, encoding?: string): any;

    setFCnt(fCnt: any, encoding?: string): any;

    setFOpts(option: any, fOpts: any, encoding?: string): any;

    setFPort(fPort: any, encoding?: string): any;

    setFlag(namespace: any, flag: any, data: any): void;

    setFrameAck(ack: any): any;

    setFrameAdr(adr: any): any;

    setFrameAdrAckReq(adrAckReq: any): any;

    setFrameFOptsLen(fOptsLen: any, encoding?: string): any;

    setFrameFPending(fPending: any): any;

    setFrmPayload(fPort: any, frmPayload: any, encoding?: string): any;

    setMHDR(mhdr: any, encoding?: string): any;

    setMType(valuemtype: any): any;

    setMajor(major: any): any;

    setNetId(netId: any, encoding?: string): any;

    setNwkSKey(nwkSKey: any, encoding?: string): any;

    setRx1DRoffset(rx1DRoffset: any, encoding?: string): any;

    setRx2DataRate(rx2DataRate: any, encoding?: string): any;

    setRxDelay(rxDelay: any, encoding?: string): any;

    toJSON(encoding?: string): any;

    toString(encoding?: string): any;

    verifyMic(key: any, encoding?: string): any;

    verifyPacket(): void;

    static CID: {
        CID_DEV_STATUS: number;
        CID_DUTY_CYCLE: number;
        CID_LINK_ADR: number;
        CID_LINK_CHECK: number;
        CID_NEW_CHANNEL: number;
        CID_RX_PARAM_SETUP: number;
        CID_RX_TIMING_SETUP: number;
    };

    static DIRECTION: {
        DOWN: number;
        UP: number;
    };

    static MTYPE: {
        MTYPE_CONFIRMED_DATA_DOWN: number;
        MTYPE_CONFIRMED_DATA_UP: number;
        MTYPE_JOIN_ACCEPT: number;
        MTYPE_JOIN_REQUEST: number;
        MTYPE_PROPIETARY: number;
        MTYPE_RFU: number;
        MTYPE_UNCONFIRMED_DATA_DOWN: number;
        MTYPE_UNCONFIRMED_DATA_UP: number;
    };

    static SIZE: {
        APP_EUI: number;
        APP_NONCE: number;
        DEV_ADDR: number;
        DEV_EUI: number;
        DEV_NONCE: number;
        FCNT: number;
        FCTRL: number;
        MHDR: number;
        MIC: number;
        NET_ID: number;
        RX1DROFFSET: number;
        RX2DATARATE: number;
        RXDELAY: number;
    };

    static compute(mac: any, key: any, fromPayload: any): any;

    static decode(buffer: any, appSKey: any, netSKey: any, appKey: any): any;

    static decryptFramePayload(frame: any, direction: any, netSKey: any, appSKey: any): any;

    static encode(mac: any, netSKey: any, appKey: any): any;

    static encryptFramePayload(frame: any, direction: any, netSKey: any, appSKey: any): any;

}

