import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ku';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;