import sharp from 'sharp'
import * as fs from 'fs'

const vrand = ( height, path, filename ) => {
    sharp( './brand_source.svg' ).resize( null, height, { nearest: true } ).png().toBuffer().then( data => {
        fs.writeFile( path + filename , data, () => {
            console.log( `${ path + filename } generated!` )
        } )
    } ).catch( error => {
        console.error( error )
    } )
}

/**
 * Location:
 *  /var/www/frontend/src/assets/img/
 */
const path = '/var/www/frontend/src/assets/img/'
vrand( 159, path, 'img_login@3x.png' )
vrand( 106, path, 'img_login@2x.png' )
vrand( 53, path, 'img_login.png' )
vrand( 75, path, 'logo@3x.png' )
vrand( 50, path, 'logo@2x.png' )
vrand( 25, path, 'logo.png' )

/**
 * Location:
 *  /var/www/frontend/src/assets/img/official/
 */
const inner = '/var/www/frontend/src/assets/img/official/'
vrand( 72, inner, 'img_header@3x.png' )
vrand( 48, inner, 'img_header@2x.png' )
vrand( 24, inner, 'img_header@1x.png' )
vrand( 24, inner, 'img_header.svg' )

vrand( 165, inner, 'img_login@3x.png' )
vrand( 110, inner, 'img_login@2x.png' )
vrand( 55, inner, 'img_login@1x.png' )
vrand( 55, inner, 'img_login.svg' )

/**
 * Location:
 *  /var/www/backend/Westtelco-zoom-back/Templates/Images/
 */
const backend = '/var/www/backend/Westtelco-zoom-back/Templates/Images/'
vrand( 17, backend, 'img_wt.svg' )