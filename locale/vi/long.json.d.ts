import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'vi';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;