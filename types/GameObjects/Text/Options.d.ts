export default TextOptions;
declare namespace TextOptions {
    namespace font {
        namespace style {
            const normal: string;
            const italic: string;
            const oblique: string;
        }
        namespace variant {
            const normal_1: string;
            export { normal_1 as normal };
            export const smallCaps: string;
        }
        namespace weight {
            const normal_2: string;
            export { normal_2 as normal };
            export const bold: string;
            export const bolder: string;
            export const lighter: string;
        }
        namespace family {
            const Arial: string;
            const Verdana: string;
            const TimesNewRoman: string;
            const CourierNew: string;
            const serif: string;
            const sansSerif: string;
        }
    }
    namespace align {
        namespace vertical {
            const top: string;
            const middle: string;
            const bottom: string;
        }
        namespace horizontal {
            const left: string;
            const center: string;
            const right: string;
        }
    }
    namespace direction {
        const ltr: string;
        const rtl: string;
        const inherit: string;
    }
}
//# sourceMappingURL=Options.d.ts.map