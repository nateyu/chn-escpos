//
//  SEE: https://www.sparkfun.com/datasheets/Components/General/Driver%20board.pdf
//

module.exports = {
	INITIAL_PRINTER : '\x1B\x40'    , //Initial paper
	NEW_LINE        : '\x0A'        , //Add new line
	PAPER_CUTTING   : '\x1d\x56\x41', //Cut paper
	LINE_HEIGHT     : '\x1b\x32',     //Normal line height 
	LINE_HEIGHT_B   : '\x1b\x33\x6e', //Normal line height large
	CHN_TEXT        : '\x1b\x52\x0f', //CHN text
	// text style
	TXT_NORMAL      : '\x1b\x21\x00', // Normal text
	TXT_2HEIGHT     : '\x1d\x21\x01', // Double height text
	TXT_2WIDTH      : '\x1d\x21\x10', // Double width text

	TXT_UNDERL_OFF  : '\x1b\x2d\x00', // Underline font OFF
	TXT_UNDERL_ON   : '\x1b\x2d\x01', // Underline font 1-dot ON
	TXT_UNDERL2_ON  : '\x1b\x2d\x02', // Underline font 2-dot ON
	TXT_BOLD_OFF    : '\x1b\x45\x00', // Bold font OFF
	TXT_BOLD_ON     : '\x1b\x45\x01', // Bold font ON

	TXT_ALIGN_L     : '\x1b\x61\x00', // Left justification
	TXT_ALIGN_C     : '\x1b\x61\x01', // Centering
	TXT_ALIGN_R     : '\x1b\x61\x02', // Right justification

	//字体
	TXT_FONT_A      : '\x1b\x4d\x00', // Font type A
  	TXT_FONT_B      : '\x1b\x4d\x01', // Font type B
  	TXT_FONT_C      : '\x1b\x4d\x02', // Font type C
  	TXT_FONT_D      : '\x1b\x4d\x48', // Font type D
  	TXT_FONT_E      : '\x1b\x4d\x31', // Font type E

	//barcode
	BARCODE_TXT_OFF : '\x1d\x48\x00' , // HRI barcode chars OFF
	BARCODE_TXT_ABV : '\x1d\x48\x01' , // HRI barcode chars above
	BARCODE_TXT_BLW : '\x1d\x48\x02' , // HRI barcode chars below
	BARCODE_TXT_BTH : '\x1d\x48\x03' , // HRI barcode chars both above and below

	BARCODE_FONT_A  : '\x1d\x66\x00' , // Font type A for HRI barcode chars
	BARCODE_FONT_B  : '\x1d\x66\x01' , // Font type B for HRI barcode chars

	BARCODE_HEIGHT  : '\x1d\x68\x64' , // Barcode Height [1-255]
	BARCODE_WIDTH   : '\x1d\x77\x03' , // Barcode Width  [2-6]

	//一维码
	BARCODE_UPC_A   : '\x1d\x6b\x00' , // Barcode type UPC-A
	BARCODE_UPC_E   : '\x1d\x6b\x01' , // Barcode type UPC-E
	BARCODE_EAN13   : '\x1d\x6b\x02' , // Barcode type EAN13
	BARCODE_EAN8    : '\x1d\x6b\x03' , // Barcode type EAN8
	BARCODE_CODE39  : '\x1d\x6b\x04' , // Barcode type CODE39
	BARCODE_ITF     : '\x1d\x6b\x05' , // Barcode type ITF
	BARCODE_NW7     : '\x1d\x6b\x06' , // Barcode type NW7
}