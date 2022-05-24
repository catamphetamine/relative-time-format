import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'gu';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;