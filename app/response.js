
exports.notFound = (res) => {
    return res.status(404).json({
        status: 404,
        code: 'RES_ERRO_NOT_FOUND',
        message: 'Not Found',
        messageDetail: 'El servidor no pudo encontrar el contenido solicitado'
    });
}


exports.success = (res, data = null, messageDetail = 'La solicitud ha tenido éxito', message = 'OK', code = 'RES_SUCC_OK') => {
    return res.status(200).json({
        status: 200,
        code: code,
        message: message,
        messageDetail: messageDetail,
        data: data
    });
}

exports.toMany = (res, data = null, messageDetail = 'se exedio el numero de correos permitidos', message = 'cantidad no permitida', code = 'RES_ERRO_TO_MANY_EMAILS') => {
    return res.status(200).json({
        status: 200,
        code: code,
        message: message,
        messageDetail: messageDetail,
    });
}






