import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'cs';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;