import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-LR';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;