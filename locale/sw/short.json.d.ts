import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'sw';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;