import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ga';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;