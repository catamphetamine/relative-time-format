import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ku';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;