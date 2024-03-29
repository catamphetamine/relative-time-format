import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'rm';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;