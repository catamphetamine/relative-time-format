import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'kn';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;