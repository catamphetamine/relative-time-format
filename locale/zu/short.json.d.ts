import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'zu';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;