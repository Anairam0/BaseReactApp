import * as React from 'react';
import { Image, ImageFit } from 'office-ui-fabric-react/lib/Image';

export const NotImplemented: React.FunctionComponent = () =>
    <Image styles={{ image: { width: '100%' } }} imageFit={ImageFit.none} src={require('src/assets/NotYetImplemented.png')} />;
export function notImplementedAlert(): void { alert('Functionality is not yet completed.'); }