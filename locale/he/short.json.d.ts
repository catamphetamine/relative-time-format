import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'he';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;