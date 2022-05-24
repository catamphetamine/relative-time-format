import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'pa';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;