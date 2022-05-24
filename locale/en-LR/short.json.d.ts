import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-LR';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;