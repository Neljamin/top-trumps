const colors = {
	white: "#ffffff",
	black: "#000000",
	red: "#FF9AA2",
	darkRed: "#8a0000",
	darkOrange: "#FFB7B2",
	orange: "#FFDAC1",
	yellow: "#FFFFD1",
	lightGreen: "#E2F0CB",
	green: "#B5EAD7",
	darkGreen: "#546940",
	blue: "#a5d6f7",
};

export default {
	gameState: {
		win: {
			text: colors.darkGreen,
			background: colors.green,
		},
		lose: {
			text: colors.darkRed,
			background: colors.red,
		},
		draw: {
			text: colors.black,
			background: colors.yellow,
		},
		unplayed: {
			text: colors.black,
			background: colors.white,
		},
	},
	user: {
		background: colors.blue,
	},
	computer: {
		background: colors.orange,
	},
};
