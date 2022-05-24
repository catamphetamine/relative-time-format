import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ku';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;