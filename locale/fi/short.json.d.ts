import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'fi';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;