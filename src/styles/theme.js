const colors = {
	white: "#ffffff",
	black: "#000000",
	darkGrey: "#333333",
	lightGrey: "#DDDDDD",
	red: "#FF9AA2",
	darkRed: "#8A0000",
	darkOrange: "#FFB7B2",
	orange: "#FFDAC1",
	yellow: "#FFFFD1",
	lightGreen: "#E2F0CB",
	green: "#B5EAD7",
	darkGreen: "#546940",
	blue: "#A5D6F7",
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
			text: colors.darkGrey,
			background: colors.white,
		},
	},
	user: {
		background: colors.blue,
		backgroundImage: '',
		scoreColor: colors.black,
		frontFace: {
			background: colors.white,
			textColor: colors.black,
			categoryBackground: colors.white,
			categoryBackgroundHover: colors.lightGrey,
		},
		backFace: {
			background: colors.white,
			innerBackgroundColor: colors.white,
			innerBackgroundImage: '',
			avatarIconColor: colors.darkGrey,
		}
	},
	computer: {
		background: colors.orange,
		backgroundImage: '',
		scoreColor: colors.black,
		frontFace: {
			background: colors.white,
			textColor: colors.black,
			categoryBackground: colors.white,
			categoryBackgroundHover: colors.lightGrey,
		},
		backFace: {
			background: colors.white,
			innerBackgroundColor: colors.white,
			innerBackgroundImage: '',
			avatarIconColor: colors.darkGrey,
		}
	},
};
