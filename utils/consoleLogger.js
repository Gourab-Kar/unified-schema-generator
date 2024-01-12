import util from 'util';

const COLOR_CONSTANT = {
    RESET: "\x1b[0m",
    BRIGHT: "\x1b[1m",
    DIM: "\x1b[2m",
    UNDERSCORE: "\x1b[4m",
    BLINK: "\x1b[5m",
    REVERSE: "\x1b[7m",
    HIDDEN: "\x1b[8m",

    FOREGROUND_BLACK: "\x1b[30m",
    FOREGROUND_RED: "\x1b[31m",
    FOREGROUND_GREEN: "\x1b[32m",
    FOREGROUND_YELLOW: "\x1b[33m",
    FOREGROUND_BLUE: "\x1b[34m",
    FOREGROUND_MAGENTA: "\x1b[35m",
    FOREGROUND_CYAN: "\x1b[36m",
    FOREGROUND_WHITE: "\x1b[37m",

    BACKGROUND_BLACK: "\x1b[40m",
    BACKGROUND_RED: "\x1b[41m",
    BACKGROUND_GREEN: "\x1b[42m",
    BACKGROUND_YELLOW: "\x1b[43m",
    BACKGROUND_BLUE: "\x1b[44m",
    BACKGROUND_MAGENTA: "\x1b[45m",
    BACKGROUND_CYAN: "\x1b[46m",
    BACKGROUND_WHITE: "\x1b[47m"
}

export const logNotify = function (msg) {
    console.log("\n" + COLOR_CONSTANT.FOREGROUND_CYAN + " " + msg + COLOR_CONSTANT.RESET);
};
export const logInfo = function (msg) {
    console.log("\n" + COLOR_CONSTANT.FOREGROUND_GREEN + " " + msg + COLOR_CONSTANT.RESET);
};
export const logSuccess = function (msg) {
    console.log("\n" + COLOR_CONSTANT.FOREGROUND_GREEN + " " + msg + COLOR_CONSTANT.RESET);
};
export const logWarning = function (msg) {
    console.log("\n" + COLOR_CONSTANT.FOREGROUND_YELLOW + " " + msg + COLOR_CONSTANT.RESET);
};
export const logError = function (msg) {
    console.log("\n" + COLOR_CONSTANT.BACKGROUND_RED + " " +
        util.inspect(msg, false, null, true) +
        COLOR_CONSTANT.RESET);
};
export const logSpreaded = function (msg) {
    console.log(util.inspect(msg,  {
        showHidden: false,
        depth: null,
        colors: true
    }));
}