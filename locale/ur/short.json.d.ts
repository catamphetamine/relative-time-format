import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ur';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;