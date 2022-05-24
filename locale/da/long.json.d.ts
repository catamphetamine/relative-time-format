import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'da';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;