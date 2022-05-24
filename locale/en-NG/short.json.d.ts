import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-NG';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;