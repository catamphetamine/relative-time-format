import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'cy';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;