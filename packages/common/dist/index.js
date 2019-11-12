"use strict";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var NewAppScreen_1 = require("react-native/Libraries/NewAppScreen");
exports.App = function () {
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(react_native_1.StatusBar, { barStyle: "dark-content" }),
        react_1.default.createElement(react_native_1.SafeAreaView, null,
            react_1.default.createElement(react_native_1.ScrollView, { contentInsetAdjustmentBehavior: "automatic", style: styles.scrollView },
                react_1.default.createElement(NewAppScreen_1.Header, null),
                react_1.default.createElement(react_native_1.View, { style: styles.body },
                    react_1.default.createElement(react_native_1.View, { style: styles.sectionContainer },
                        react_1.default.createElement(react_native_1.Text, { style: styles.sectionTitle }, "Step One"),
                        react_1.default.createElement(react_native_1.Text, { style: styles.sectionDescription },
                            "Edit ",
                            react_1.default.createElement(react_native_1.Text, { style: styles.highlight }, "App.tsx"),
                            " to change this screen and then come back to see your edits.")),
                    react_1.default.createElement(react_native_1.View, { style: styles.sectionContainer },
                        react_1.default.createElement(react_native_1.Text, { style: styles.sectionTitle }, "See Your Changes"),
                        react_1.default.createElement(react_native_1.Text, { style: styles.sectionDescription },
                            react_1.default.createElement(NewAppScreen_1.ReloadInstructions, null))),
                    react_1.default.createElement(react_native_1.View, { style: styles.sectionContainer },
                        react_1.default.createElement(react_native_1.Text, { style: styles.sectionTitle }, "Debug"),
                        react_1.default.createElement(react_native_1.Text, { style: styles.sectionDescription },
                            react_1.default.createElement(NewAppScreen_1.DebugInstructions, null))),
                    react_1.default.createElement(react_native_1.View, { style: styles.sectionContainer },
                        react_1.default.createElement(react_native_1.Text, { style: styles.sectionTitle }, "Learn More"),
                        react_1.default.createElement(react_native_1.Text, { style: styles.sectionDescription }, "Read the docs to discover what to do next:")),
                    react_1.default.createElement(NewAppScreen_1.LearnMoreLinks, null))))));
};
var styles = react_native_1.StyleSheet.create({
    scrollView: {
        backgroundColor: NewAppScreen_1.Colors.lighter
    },
    engine: {
        position: "absolute",
        right: 0
    },
    body: {
        backgroundColor: NewAppScreen_1.Colors.white
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "600",
        color: NewAppScreen_1.Colors.black
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: "400",
        color: NewAppScreen_1.Colors.dark
    },
    highlight: {
        fontWeight: "700"
    },
    footer: {
        color: NewAppScreen_1.Colors.dark,
        fontSize: 12,
        fontWeight: "600",
        padding: 4,
        paddingRight: 12,
        textAlign: "right"
    }
});
