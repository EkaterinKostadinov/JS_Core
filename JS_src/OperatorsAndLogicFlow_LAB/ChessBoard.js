function printChessBoard(numberOfRows) {
    let html = '<div class="chessboard">\n';
    for (let columns = 1; columns <= numberOfRows; columns++) {
        html += '  <div>\n'
        for (let rows = 1; rows <= numberOfRows; rows++) {
            if (columns % 2 == 1) {
                if (rows % 2 == 1) {
                    html += '    <span class="black"></span>'
                } else {
                    html += '    <span class="white"></span>'
                }
                html += '\n'
            } else {
                if (rows % 2 == 1) {
                    html += '    <span class="white"></span>'
                } else {
                    html += '    <span class="black"></span>'
                }
                html += '\n'
            }
        }
        html += '  </div>\n'
    }
    html += '</div>'
    return html;
}