import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'nso';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;