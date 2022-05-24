import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'nn';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;