import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'tr';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;