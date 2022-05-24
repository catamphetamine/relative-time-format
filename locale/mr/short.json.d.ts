import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'mr';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;