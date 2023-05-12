export const icons = {
    instagram: (color = '#ffff', fontSize ='1rem') => <i className="bi bi-instagram" style={{ color, fontSize }}></i>,
    twitter: (color = '#ffff', fontSize ='1rem') => <i className="bi bi-twitter" style={{ color, fontSize }}></i>,
    facebook: (color = '#ffff', fontSize ='1rem') => <i className="bi bi-facebook" style={{ color, fontSize }}></i>,
    navHandler: (color = '#ffff', fontSize ='1rem', fontWeight = 100) => <i className="bi bi-arrow-left-square-fill" style={{ color, fontSize, fontWeight }}></i>,
    closeIcon: (color = '#ffff', fontSize ='1rem') => <i className="bi bi-x" style={{ color, fontSize }}></i>,
    steamIcon: (color = '#ffff', fontSize ='1rem') => <i className="bi bi-steam" style={{ color, fontSize }}></i>,
}

export const Images = {
    profilePic: require('../../public/images/profilePic.jpg')
}